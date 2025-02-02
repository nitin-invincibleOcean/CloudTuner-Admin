const CloudAccount = {
    deleted_at: null,
    id: null,
    created_at: null,
    name: null,
    type: null,
    config: null,
    organization_id: null,
    cost_model_id: null,
    auto_import: null,
    import_period: null,
    last_import_at: null,
    last_import_modified_at: null,
    account_id: null,
    process_recommendations: null,
    last_import_attempt_at: null,
    last_import_attempt_error: null,
    last_getting_metrics_at: null,
    last_getting_metric_attempt_at: null,
    last_getting_metric_attempt_error: null,
    cleaned_at: null,
    parent_id: null,

    initialize(data) {
        this.deleted_at = data.deleted_at;
        this.id = data.id;
        this.created_at = data.created_at;
        this.name = data.name;
        this.type = data.type;
        this.config = data.config;
        this.organization_id = data.organization_id;
        this.cost_model_id = data.cost_model_id;
        this.auto_import = data.auto_import;
        this.import_period = data.import_period;
        this.last_import_at = data.last_import_at;
        this.last_import_modified_at = data.last_import_modified_at;
        this.account_id = data.account_id;
        this.process_recommendations = data.process_recommendations;
        this.last_import_attempt_at = data.last_import_attempt_at;
        this.last_import_attempt_error = data.last_import_attempt_error;
        this.last_getting_metrics_at = data.last_getting_metrics_at;
        this.last_getting_metric_attempt_at = data.last_getting_metric_attempt_at;
        this.last_getting_metric_attempt_error = data.last_getting_metric_attempt_error;
        this.cleaned_at = data.cleaned_at;
        this.parent_id = data.parent_id;
    }
};

module.exports = CloudAccount;
