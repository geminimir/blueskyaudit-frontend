declare function gtag(
    command: 'event',
    action: string,
    params: {
      email_domain?: string;
      [key: string]: string | undefined;
    }
  ): void; 