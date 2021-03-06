import { ActionType, IAction, Utils } from "../classes";

/** @hidden */
export class CallSubOrchestratorAction implements IAction {
    public readonly actionType: ActionType = ActionType.CallSubOrchestrator;

    constructor(
        public readonly functionName: string,
        public readonly instanceId?: string,
        public readonly input?: unknown,
    ) {
        Utils.throwIfEmpty(functionName, "functionName");

        if (instanceId) {
            Utils.throwIfEmpty(instanceId, "instanceId");
        }
    }
}
