////////////////////
// TYPES - CLIENT //
////////////////////

namespace client {
    export type Post = {
        name: string,
        message: string,
        postid: number,
        user?: User,
        date: Date
    }
    export type User = {
        username: string,
        userid: number
    }

    export type PostBuilder = {
        name: string,
        message: string,
        revealuser: boolean,
    }

    export type LoginResponse = LoginResponseFailure | LoginResponseSuccess;
    export type LoginResponseFailure = {
        success: false,
        reason: string
    }
    export type LoginResponseSuccess = {
        success: true,
    }

    export type Role = {
        read: boolean,  // allowed to read posts of this channel
        write: boolean, // allowed to write posts in this channel
        moderator: boolean, // allowed to use moderator commands
        admin: boolean  // allowed to use admin commands
    }


}

/////////////////////
// TYPES - NETWORK //
/////////////////////

namespace network {
    export type PkgPostBuilder {
        type: "PkgPostBuilder",
        builder: client.PostBuilder
    }
}



/////////////////////
// TYPES - STORAGE //
/////////////////////

export interface ChatDB {
    readonly postDB: ReadonlyMap<string, Post[]>;
    readonly userDB: ReadonlyMap<number, User>;
}

export const appendPost: (post: Post) => (chatDB: ChatDB) => ChatDB
    = p => c => c;

///////////////////////
// FUNCTIONS - FETCH //
///////////////////////

export declare const fetchUser: () => (userid: number) => Task<Option<User>>;


///////////////
// FUNCTIONS //
///////////////

//////////////////
// CONSTRUCTORS //
//////////////////

///////////////////
// SERIALIZATION //
///////////////////

export const wfRole = (o: Role) => ({

});

export const wfUser = (u: User) => ({
    username: u.username,
    userid: u.userid,
    privileges: u.privileges
});
export const rfUser = (u: ReturnType<typeof wfUser>) => ({
    username: u.username,
    userid: u.userid,
    privileges: u.privileges
}) as User;

export const wfPost = (p: Post) => ({
    name: p.name,
    message: p.message,
    id: p.id,
    userid: pipe(p.user, map(u => u.userid), toUndefined)
});
export const rfPost = (p: ReturnType<typeof wfPost>) => fromNullable({
    name: p.name,
    message: p.message,
    id: p.id,
    user: pipe(some((un: string) => (ui: number) => ({ username: un, userid: ui })), ap)
}) as Option<Post>;