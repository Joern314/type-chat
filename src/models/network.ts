import { Post, Message, User } from "./chat"
import { getOrElse, fromNullable } from "fp-ts/lib/Either";
import { Option, option, fold, some, ap, isSome, map, toUndefined } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/pipeable"

namespace network {

    //////////////
    // REQUESTS //
    //////////////

    export const reqUser = (userid: number) => 

    ///////////
    // TYPES //
    ///////////

    // outgoing packages
    export type PackageOut =
        | PkgMessage
        | PkgPing;
    // incoming packages
    export type PackageIn =
        | PkgPost
        | PkgPong;
    // both
    export type Package = PackageIn | PackageOut;

    // Package Types
    export interface PkgMessage {
        type: "message", message: Message
    }
    export interface PkgPost {
        type: "post", post: Post
    }
    export interface PkgPing { type: "ping" }
    export interface PkgPong { type: "pong" }

    //////////////////
    // CONSTRUCTORS //
    //////////////////

    export const newPkgPost = (p: Post) => ({ type: "post", post: p }) as PkgPost;
    export const newPkgMessage = (m: Message) => ({ type: "message", message: m }) as PkgMessage;
    export const newPkgPing = () => ({ type: "ping" }) as PkgPing;
    export const newPkgPong = () => ({ type: "pong" }) as PkgPong;

}