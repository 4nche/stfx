declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_INFURA_API_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
