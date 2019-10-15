export interface ISubtopic {
    title: string,
    path: string
}

export interface ILessonInformation {
    done: number,
    total: number
}

export interface IProgress {
    theory: ILessonInformation,
    practice: ILessonInformation,
}

export interface ILessons {
    title: string,
    progress: IProgress,
    subtopics: Array<ISubtopic>
}

export interface IState {
    lessons: Array<ILessons>
}

export const initialState: IState = {
    lessons: [
        {
            title: '',
            progress: {
                theory: {
                    done: 0,
                    total: 0
                },
                practice: {
                    done: 0,
                    total: 0
                }
            },
            subtopics : [],
        }
    ]
}