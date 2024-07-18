export interface ITaskType {
    TypeID: number;
    TaskType: string;
    TaskCount: number;
    TaskColor: string;
  }
  
  export interface ITask {
    id: number;
    name: string;
    expired: number;
    type: number;
    link: string;
    reward: number;
  }