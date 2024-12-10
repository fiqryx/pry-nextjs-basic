import { create } from 'zustand';
import {
    getCookie,
    deleteCookie,
} from 'cookies-next/client';
import { User } from '@/types/user';
import { setCookie } from 'cookies-next';

export interface AuthState {
    token?: string
    user?: User
    loading?: boolean
}

export interface AuthStore extends AuthState {
    set: (state: Partial<AuthState>) => void
    reset: () => void
}

const key = process.env.AUTH_COOKIE_KEY as string

export const useAuthStore = create<AuthStore>((set) => ({
    token: getCookie(key),
    loading: false,

    set: (state) => set(prev => {
        if (state.token) {
            setCookie(key, state.token, {
                secure: true,
                maxAge: 7 * 3600
            })
        }

        return {
            ...prev,
            ...state
        }
    }),

    reset: () => {
        deleteCookie(key, { secure: true })
        set({
            token: undefined,
            user: undefined
        })
    }
}))