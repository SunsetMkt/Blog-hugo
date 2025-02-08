export declare class Barrier {
    counter: atomic_int32;
    atomic: atomic_int32;
    numAgents: atomic_int32;
}
/**
 * 初始化 Barrier
 * @returns
 */
export declare function init(barrier: pointer<Barrier>, numAgents: int32): int32;
/**
 * Enter the barrier
 * This will block until all agents have entered the barrier
 *
 * @param barrier
 */
export declare function enter(barrier: pointer<Barrier>): int32;
