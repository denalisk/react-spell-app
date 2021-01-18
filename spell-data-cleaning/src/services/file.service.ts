import fs from "fs";
import IDataFileConfiguration from "../models/data-file.configuration";

export class FileService {
    /**
     * Writes the passed data as the json contents of the configured file
     * @param data The data to save
     */
    public save(path: string, data: any): Promise<void> {
        const jsonData = JSON.stringify(data);

        return new Promise((resolve, reject) => {
            fs.writeFile(path, jsonData, 'utf8', (err) => {
                if (err) {
                    console.log(`Unable to write to file ${path}`);
                    reject(err);
                } else {
                    resolve();
                }
            })
        });
    }

    /**
     * Returns the contents of the configured file as an object
     * @param path The absolute path to the file
     */
    public read<T>(path: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    console.log(`Could not read from ${path}.`);
                    reject(err);
                } else {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData as T);
                }
            })
        })
    }
}