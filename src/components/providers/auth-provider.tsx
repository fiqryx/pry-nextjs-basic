'use client'

import React from "react"
import { logger } from "@/lib/logger"
import { getUser } from "@/lib/auth/user"
import { useAuthStore } from "@/stores/auth"

type Props = {
    children?: React.ReactNode
}

export function AuthProvider({ children }: Props) {
    const authStore = useAuthStore()

    async function checkSession() {
        try {
            logger.debug("checking session")
            authStore.set({ loading: true })

            const { data, error } = await getUser()

            if (error) {
                throw error
            }

            authStore.set({ user: data })
        } catch (error) {
            logger.error(error)
            authStore.set({ token: undefined, user: undefined })
        } finally {
            authStore.set({ loading: false })
        }
    }

    React.useEffect(() => {
        if (!authStore.user) {
            checkSession().catch(logger.error)
        }
    }, [authStore.user])

    return children
}