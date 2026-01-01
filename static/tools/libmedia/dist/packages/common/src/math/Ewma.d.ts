export default class EWMA {
    readonly halfLife: number;
    private alpha;
    private estimate;
    private totalWeight;
    constructor(halfLife: number, estimate?: number, weight?: number);
    sample(weight: number, value: number): void;
    getTotalWeight(): number;
    getEstimate(): number;
}
