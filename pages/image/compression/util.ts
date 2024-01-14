export class Compression {
    files: FileList;
    // 压缩质量
    compressQuality: number;

    constructor(files: FileList, compressQuality: number) {
        this.files = files
        this.compressQuality = compressQuality
        this.createBase64List()
    }

    createBase64List() {
        const filesArr = Array(...this.files)
        console.log(filesArr);
        const promises = Promise.all(filesArr.map(file => new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                resolve(e.target!.result)
            }
            fileReader.onerror = (e) => {
                reject(e)
            }
            fileReader.readAsDataURL(file)
        })))

        promises.then((res) => {
            res.forEach((url) => {
                this.compression(url as string)
            })
        })
    }

    compression(url: string) {
        const image = new Image();
        image.src = url;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return;
            }
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
            const base64 = canvas.toDataURL('image/jpeg', this.compressQuality);
            console.log(base64);
            // 保存图片
            this.saveImage(base64);
        }
    }

    saveImage(base64: string) {
        const link = document.createElement('a');
        link.href = base64;
        link.download = `qtool_${window.crypto.randomUUID()}.jpg`;
        link.click();
    }
}