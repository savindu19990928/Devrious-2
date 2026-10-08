import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export function Logo({ tone = 'light' }: LogoProps) {
  const onDark = tone === 'dark';
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
      aria-label="Devrious home"
      data-testid="brand-logo-link"
    >
      <svg
        viewBox="0 0 237 282"
        className="h-8 w-auto shrink-0"
        role="img"
        aria-label="Devrious Logo"
        data-brand-logo="true"
      >
        <title>Devrious Logo</title>
        <desc>Devrious official brand logo mark in emerald green, warm amber, and coral red</desc>
        <path
          fill="#12B57A"
          d="M75 60H232V118H85A25 25 0 0 0 60 143V195A25 25 0 0 0 85 220H175V277H75A70 70 0 0 1 5 207V130A70 70 0 0 1 75 60Z"
        />
        <path fill="#FFD400" d="M175 60V30A25 25 0 0 1 200 5H232V60Z" />
        <path fill="#FF5E5B" d="M175 118H232V195A25 25 0 0 1 207 220H175Z" />
      </svg>
      <span className={`font-display text-xl font-extrabold tracking-tight ${onDark ? 'text-white' : 'text-ink-950'}`}>
        Devrious
      </span>
    </Link>
  );
}