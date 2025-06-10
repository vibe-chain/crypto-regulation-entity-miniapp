/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence warnings
  // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");

    // 👇 Agregamos esta regla para tratar HeartbeatWorker.js como módulo ESM
    config.module.rules.push({
      test: /HeartbeatWorker\.js$/,
      issuer: /\.[jt]sx?$/,
      type: 'javascript/esm',
    });

    return config;
  },
};

export default nextConfig;
