export class Category {
    id: number;
    label: string;
    isActive: boolean;
    constructor(id: number, label: string) {
        this.id = id;
        this.label = label;
        this.isActive = true;
    }
    isDeleted(): boolean {
        return this.isActive
    }
}
