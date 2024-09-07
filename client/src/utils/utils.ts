import { v4 as uuidv4 } from 'uuid';

const APP_BASE_PREFIX = 'drip-shop'

export function setUser(id: string){
    window.localStorage.setItem(APP_BASE_PREFIX, JSON.stringify(id) );
}

export function getUser(): string {
   return window.localStorage.getItem(APP_BASE_PREFIX) as string;
}

export function generateUserId(){
    return uuidv4();
}