export interface DefinitionItem {
    label: string;
    type: string;
    desc: string;
}

export type TQuestTypeItem = {
    id: string;
    description: string;
    data: Array<DefinitionItem>
}