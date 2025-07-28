export interface IRecruitmentEvent {
    title: string;
    subtitle: string;
    dateTime: Date | string; // Date can be a Date object or a string
    duration?: number; // Duration in minutes
    showDuration?: boolean; // Whether to show the duration, defaults to true if not provided
    location: string;
}
