INSERT INTO `user` (id, employeeId, email, `password`, `is_admin`, accountSetup)
VALUES
    # The password is "password"
    (1, '001', 'user@example.com', '$argon2id$v=19$m=65536,t=4,p=1$YuQfIAKOJmCanlmeDtavHQ$9oOVYMkSNDQX38KEIdO7j2P3PDcmnM6Szr9xes3Pjg4', 0, 1),
    (2, '002', 'admin@example.com', '$argon2id$v=19$m=65536,t=4,p=1$YuQfIAKOJmCanlmeDtavHQ$9oOVYMkSNDQX38KEIdO7j2P3PDcmnM6Szr9xes3Pjg4', 1, 1),
    (3, '003', 'new@example.com', '$argon2id$v=19$m=65536,t=4,p=1$YuQfIAKOJmCanlmeDtavHQ$9oOVYMkSNDQX38KEIdO7j2P3PDcmnM6Szr9xes3Pjg4', 0, 0);

INSERT INTO payslip (id, userId, `date`, `path`)
VALUES
    ('110e8400-e29b-11d4-a716-446655440001', 1, '2013-04-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440002', 1, '2013-05-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440003', 1, '2013-06-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440004', 1, '2013-07-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440005', 1, '2014-04-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440006', 1, '2014-05-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440007', 1, '2014-06-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440008', 1, '2014-07-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440009', 1, '2015-07-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440010', 1, '2015-08-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440011', 1, '2015-09-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440012', 1, '2015-10-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440013', 1, '2016-09-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440014', 1, '2016-10-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440015', 1, '2016-11-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440016', 1, '2016-12-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440017', 1, '2017-02-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440018', 1, '2017-03-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440019', 1, '2017-04-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440020', 1, '2017-05-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440021', 1, '2018-04-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440022', 1, '2018-05-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440023', 1, '2018-08-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440024', 1, '2018-09-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440025', 1, '2019-06-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440026', 1, '2019-07-12', '1/bulletin.pdf'),
    ('110e8400-e29b-11d4-a716-446655440027', 1, '2019-08-12', '1/bulletin.pdf');
