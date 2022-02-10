INSERT INTO users (name, email, password)
VALUES ('Chuckles', 'chuckles@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'), ('MRniceguy', 'nice@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'), ('baboon', 'imamonkey@thezoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO properties (owner_id, title, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, city, street, province, post_code) VALUES (2, 'the manor', 'img.jpg', 'img.jpg', 359, 3, 3, 3, 'Canada', 'StreetLamp Le Moose','a nice town', 'BC', 'v8h3f8'), (2, 'haunted house', 'img.jpg', 'img.jpg', 139, 2, 5, 2, 'Canada', 'spooksville', 'boo st', 'BC', 'b0o4o0'), (2, 'clownhouse', 'img.jpg', 'img.jpg', 211, 1, 1, 1, 'clowntown','clowncity', 'clown st', 'BC', 'heehaw');
INSERT INTO reservations (guest_id, property_id, start_date, end_date)
VALUES (2, 1, '2018-09-11', '2018-09-26'),
(2, 2, '2019-01-04', '2019-02-01'),
(3, 3, '2021-10-01', '2021-10-14');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1,2,1,4, 'good'), (2,3,2,5, 'loved my stay'), (3,2,3,5, 'hahaha');