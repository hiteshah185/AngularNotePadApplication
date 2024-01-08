import { Category } from "./category";

export class Note {
    id: number;
    title: string;
    content: string;
    category: Category;
    private isActive: boolean;
    constructor(id: number, title: string, content: string, category: Category) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.isActive = true;
    }
    isDeleted(): boolean {
        return this.isActive;
    }
}
