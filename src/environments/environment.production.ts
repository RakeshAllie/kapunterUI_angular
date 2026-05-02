
export const environment = {
    production: false,
    environment: 'dev',
    isAdminSite: false,
    appUrl: 'http://localhost:4200/',
    apiUrl: 'https://localhost:7236',
    ueserKey: 'kapunterUser',

    imagePath:{
        sitePath:'https://kapunterstorage.blob.core.windows.net/kapunterstorage/Sites/',
        dashboardImages:'https://kapunterstorage.blob.core.windows.net/kapunterstorage/DashboardImages/',
        QR:'https://kapunterstorage.blob.core.windows.net/kapunterstorage/QR/',
        proofPath: 'https://kapunterstorage.blob.core.windows.net/kapunterstorage/paymentProof/'
    }
};