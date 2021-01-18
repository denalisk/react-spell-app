import fs from "fs";
import IDataFileConfiguration from "../models/data-file.configuration";

export class FileService {
    constructor(private fileConfig: IDataFileConfiguration) {

    }

    /**
     * Writes the passed data as the json contents of the configured file
     * @param data The data to save
     */
    public save(data: any): Promise<void> {
        const jsonData = JSON.stringify(data);

        return new Promise((resolve, reject) => {
            fs.writeFile(this.fileConfig.destinationFileName, jsonData, 'utf8', (err) => {
                if (err) {
                    console.log(`Unable to write to file ${this.fileConfig.destinationFileName}`);
                    reject(err);
                } else {
                    resolve();
                }
            })
        });
    }

    /**
     * Returns the contents of the configured file as an object
     */
    public read<T>(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fs.readFile(this.fileConfig.sourceFileName, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    console.log(`Could not read from ${this.fileConfig.sourceFileName}.`);
                    reject(err);
                } else {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData as T);
                }
            })
        })
    }
}