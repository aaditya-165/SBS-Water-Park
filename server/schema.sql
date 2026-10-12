CREATE TABLE IF NOT EXISTS enquiries (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    phone           VARCHAR(20) NOT NULL,
    email           VARCHAR(255),
    enquiry_type    VARCHAR(50) NOT NULL DEFAULT 'GENERAL',
    organization    VARCHAR(255),
    number_of_people INTEGER,
    number_of_students INTEGER,
    number_of_teachers INTEGER,
    preferred_date  DATE,
    selected_package VARCHAR(255),
    message         TEXT,
    source_page     VARCHAR(100),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_enquiries_type ON enquiries(enquiry_type);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);
