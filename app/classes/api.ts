export class RegisterData {
    username: string;
    password: string;
}

export class LoginData {
    username: string;
    password: string;
}

export class AccessTokenRequest {
    provider: string;
    code: string;
}

// Types
export class TypesRequest {
    offset: number;
    size: number;
}
export interface Type {
    id: number;
    typeName: string;
}
export interface TypeList {
    success: boolean;
    types: Type[];
}

// Tags
export class TagsRequest {
    offset: number;
    size: number;
}
export interface Tag {
    id: number;
    conditionName: string;
}
export interface TagList {
    success: boolean;
    tags: Tag[];
}

// Events
export class EventListRequest {
    offset: number;
    size: number;
}

export class ModifyEventInfo {
    title: string;
    location: string;
    description: string;
    conditions: number[];
    type: number[];
    date: string;
    withConfirmation: boolean;
    private: boolean;
    cost: number;
}

export interface EventInfo {
    id: number;
    title: string;
    location: string;
    description: string;
    date: string;
    likes: number;
    withConfirmation: boolean;
    private: boolean;
    cost: number;
    eventMaster: number;
    eventMembers: number[];
    conditions: number[]
}

export interface EventList {
    events: EventInfo[];
}