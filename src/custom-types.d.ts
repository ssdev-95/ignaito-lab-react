export interface Teacher {
	id: string;
	name: string;
	bio: string;
	avatarURL: string;
	lessons: Omit<Lesson, "teacher">[]
}

export interface Lesson {
	id: string;
	title: string;
	slug: string;
	description: string;
	videoId: string;
	lessonType: 'class' | 'live';
	availableAt: string;
	teacher: Omit<Teacher, "lessons">
	challenge?: Challenge;
}

export interface Challenge {
	URL: string;
}

interface Subscriber {
	id: string;
	name: string;
	email: string;
}
