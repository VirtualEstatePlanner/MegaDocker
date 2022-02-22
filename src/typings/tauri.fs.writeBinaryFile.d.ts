/** @format */

declare module '@tauri-apps/api/fs.cjs'

/**
 * Writes a binary file.
 *
 * @param file Write configuration object.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */
declare function writeBinaryFile(file: FsBinaryFileOption, options?: FsOptions): Promise<void>
