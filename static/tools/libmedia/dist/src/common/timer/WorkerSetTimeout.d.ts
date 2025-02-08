export default class WorkerSetTimeout {
    private worker;
    private workerUrl;
    private taskMap;
    private id;
    constructor();
    setTimeout(task: Function, timeout?: number): number;
    clearTimeout(id: number): void;
    destroy(): void;
}
