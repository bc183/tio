export interface Post {
    identifier: string;
    title: string;
    slug: string;
    subName: string;
    createdAt: string;
    updatedAt: string;
    body?: string;
    username: string;
    sub? : Sub
    //virtaul fields
    url: string;
    voteScore?: number;
    userVote? : number;
    commentCount? : number;
    imageUrl: string;
    isCode: string;
    language: string;
}
export interface User {
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
}

export interface Sub {
    createdAt: string;
    updatedAt: string;
    name: string;
    title: string;
    description: string;
    imageUrn: string;
    bannerUrn: string;
    username: string;
    posts: Post[];
    isCodingCommunity: string;
    // Virtuals
    imageUrl: string;
    bannerUrl: string;
    postCount?: number;
    subOfCommunity: string;
    subCommunities: Sub[];
  }

export interface Comment {
    identifier: string;
    body: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    userVote: number;
    voteScore: number;
    post?: Post;
}