const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clubSchema = new Schema(
  {
    activity_id_enc: { type: String },
    activity_name: { type: String },
    description: { type: String },
    visibility: { type: Boolean },
    manual_validation_flag: { type: Boolean },
    provider_name: { type: String },
    provider_id: { type: String },
    branch_name: { type: String },
    branch_id: { type: String },
    max_capacity: { type: Number },
    cost: { type: Object },
    expected_duration: { type: Object },
    address: { type: Object },
    category: { type: Object },
    weblinks: { type: Object },
    images: { type: Array },
    is_visit_flag: { type: Boolean },
    time_slots: { type: Array },
    flags: { type: Array },
    traits: { type: Object },
    source: { type: Object },
    ts_create: { type: Date },
    ts_update: { type: Date },
    last_updated_by: { type: String, default: null },
    ts_etl_run: { type: Date },
    ts_validate: { type: Date },
    last_validated_by: { type: String },
    system_validation_flag: { type: Boolean },
    validity: { type: Boolean },
    expired: { type: Boolean },
    issues: { type: Array }

  },
  { timestamps: true }
)

module.exports = mongoose.model('club', clubSchema)
