export default class VehicleModel {
    vehicleCode:string;
    plateNumber:string;
    categary:string;
    fuelType:string;
    status:string;
    staff:string
    constructor(vehicleCode:string,plateNumber:string,categary:string,fuelType:string,status:string,staff:string){
        this.vehicleCode=vehicleCode;
        this.plateNumber=plateNumber;
        this.categary=categary;
        this.fuelType=fuelType;
        this.status=status;
        this.staff=staff
    }
}