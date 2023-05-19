SELECT  _photos.id
       ,_photos.user_id
       ,_photos.photo_url
       ,_photos."updatedAt" AS photo_posted_data
       ,_users.name
       ,_users.photo_url    AS user_photo_url
       ,_users.state
       ,_users.country
       ,(
SELECT  EXISTS(
SELECT  *
FROM "Votes"
WHERE photo_id = _photos.id ) ) AS is_vote, (
SELECT  COUNT(*)
FROM "Votes" AS _votes
WHERE _votes.photo_id = _photos.id ) AS total_votes, (
SELECT  COUNT(*)
FROM "Comments" AS _comments
WHERE _comments.photo_id = _photos.id ) AS total_comments, (
SELECT  array_agg(photo_url)
FROM
(
	SELECT  _users_nested.photo_url
	FROM "Comments" AS _comments
	JOIN "Users" AS _users_nested
	ON _comments.user_id = _users_nested.id
	WHERE _comments.photo_id = _photos.id
	ORDER BY _comments."updatedAt"
	LIMIT 5
) AS subquery ) AS last_5_comments
FROM "Photos" AS _photos
JOIN "Users" AS _users
ON _photos.user_id = _users.id
WHERE _photos.user_id = '07bc028b-5a74-408b-b3d2-9cb376c1e02c'
ORDER BY _users."updatedAt" desc
LIMIT 10 offSet 0
-- comment list Query
SELECT  user_id
       ,photo_id
       ,comment_text
       ,"Comments"."createdAt" AS createdAt
       ,"Comments"."updatedAt"
       ,"Users".name           AS userName
FROM "Comments"
JOIN "Users"
ON "Comments".User_ID = "Users".ID
WHERE "Comments".User_ID = '264580ce-9e85-4936-8dc6-07c8c812c2d3'
AND "Comments".photo_id = '396f7d84-67a5-4858-ad17-2b936735e029'