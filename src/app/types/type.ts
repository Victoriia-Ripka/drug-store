export type Content = {
    id: number,
    question: string,
    answer: string
}

export type contactUsMessage = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export type User = {
    billing?: {
        name?: string;
        surname?: string;
        email?: string;
        phone?: string;
        country?: string;
        street?: string;
        apartment?: string;
        city?: string;
        postcode?: string;
    };
    shipping?: {
        country?: string;
        street?: string;
        apartment?: string;
        city?: string;
        postcode?: string;
    };
    payment?: {
        number?: string;
        name?: string;
        date?: string;
        code?: string;
    };
};