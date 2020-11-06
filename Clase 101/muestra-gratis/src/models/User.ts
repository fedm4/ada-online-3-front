import IJobId from '../interfaces/IJobId';
import IBuildingId from '../interfaces/IBuildingId';

export default class User implements IJobId, IBuildingId{
    id!: string;
    name!: string;
    createdAt!: string;
    avatar!: string;
    buildingId!: number;
    jobId!: number;
}