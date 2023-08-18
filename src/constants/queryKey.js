const categoryKeys = {
    get: () => ['/api/categories'],
    getOne: (categoryId) => ['/api/categories/{categoryId}', categoryId],
};

const ticketKeys = {
    get: (categoryId) => ['/api/user/tickets', categoryId],
    getOne: (ticketId) => ['/api/user/ticket/{ticketId}', ticketId],
    post: () => ['/api/user/ticket'],
    getTotalCount: () => ['/api/user/ticket-total-count'],
    getTotalPrice: () => ['/api/user/ticket-total-price'],
};

const userKeys = {
    register: () => ['/api/user/sign-up-with-email'],
    emailCheck: () => ['use/api/user/check-duplicated-email'],
    signin: () => ['/api/user/login-with-email'],
};

export { categoryKeys, ticketKeys, userKeys };
