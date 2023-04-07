import {Point2D} from "./Point2D";

class Point3D extends Point2D{
    private z: number;
    constructor(x: number, y: number, z:number) {
        super(x,y);
        this.z = z
    }
    getZ():number{
        return this.z
    }
    getXYZ(): object {
        return {x: super.getX(), y: super.getY(), z: this.z}
    }
    setZ(z: number): void{
        this.z = z
    }
    setXYZ(x: number, y: number, z: number): void{
        super.setX(x);
        super.setY(y);
        this.z = z;
    }
}
let p3d = new Point3D(1,2,3)
console.log(p3d.getXY())
console.log(p3d.getXYZ())
