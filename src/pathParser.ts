import { fileURLToPath } from 'node:url';
import { dirname, join, normalize, sep } from 'node:path';
import os from 'node:os';

class PathResolver {
    private readonly __filename: string;
    private readonly __dirname: string;
    private readonly isWindows: boolean;
    
    constructor(importMetaUrl: string) {
        this.__filename = fileURLToPath(importMetaUrl);
        this.__dirname = dirname(this.__filename);
        this.isWindows = os.platform() === 'win32';
    }
    
    resolve(...paths: string[]): string {
        // 使用 join 来处理跨平台的路径
        const resolvedPath = join(this.__dirname, ...paths);
        return this.normalizePath(resolvedPath);
    }
    
    resolveFromRoot(...paths: string[]): string {
        // 从项目根目录解析路径
        const rootPath = join(this.__dirname, '..');
        return this.normalizePath(join(rootPath, ...paths));
    }
    
    resolveFromCwd(...paths: string[]): string {
        // 从当前工作目录解析路径
        return this.normalizePath(join(process.cwd(), ...paths));
    }
    
    private normalizePath(path: string): string {
        // 标准化路径，处理 Windows 和 Unix 风格的路径
        const normalized = normalize(path);
        
        // 如果是 Windows 环境，可以选择是否转换为 posix 风格的路径
        return this.isWindows 
            ? normalized                    // 保持 Windows 风格
            : normalized.split(sep).join('/'); // 转换为 posix 风格
    }
    
    // 获取当前操作系统类型
    get platform() {
        return this.isWindows ? 'windows' : 'posix';
    }
}

// 创建一个单例实例
export const pathResolver = new PathResolver(import.meta.url);