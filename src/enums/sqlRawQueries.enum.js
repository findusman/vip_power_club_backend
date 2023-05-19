export const sqlRawQueriesEnums = {

    selectAllPhotos: `select * from 
	                    "Photos" as _photos
		                    join 
		                    "Users" as _users
		                    on _photos.user_id = _users.id `

}