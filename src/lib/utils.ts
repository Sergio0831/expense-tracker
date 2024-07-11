import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import prisma from './db';

/**
 * Utility function for combining Tailwind CSS and clsx classNames.
 * @param inputs - Class names provided as argument.
 * @returns - Combined class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Get user by email from db
 * @type {string}
 */
export async function getUserByEmail(email: string) {
  try {
    const user = prisma.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
}

/**
 * Get user by id from db
 * @type {string}
 */
export async function getUserById(id: string) {
  try {
    const user = prisma.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
}
