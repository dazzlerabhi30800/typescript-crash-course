abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }


    abstract getSepia(): void;
    getReelTime(): number {
        return 8;
    }
}






class Instagram2 extends TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string,
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("this is the goat")
    }
}

const instaUser = new Instagram2("bokeh", "sepia", "burst-mode");

console.log(instaUser.getReelTime());


