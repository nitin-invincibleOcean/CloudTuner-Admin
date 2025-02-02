const Organization = {
    deleted_at: null,
    created_at: null,
    id: null,
    name: null,
    pool_id: null,
    is_demo: null,
    currency: null,
    cleaned_at: null,

    initialize(data) {
        this.deleted_at = data.deleted_at;
        this.created_at = data.created_at;
        this.id = data.id;
        this.name = data.name;
        this.pool_id = data.pool_id;
        this.is_demo = data.is_demo;
        this.currency = data.currency;
        this.cleaned_at = data.cleaned_at;
    }
};

module.exports = Organization;
