# Decision to switch off Firebase

I switched to Supabase from Firebase. I was unable to get Firebase to save any new data which I later learned was because I was using a client side React component but was not exporting the Firebase config variables using `NEXT_PUBLIC` so they weren't being exposed to the frontend.

I only found this out after trying out Supabase which actually threw a useful error. Firebase just failed silently and I had no information to go off of to debug why it wasn't saving any data.

Additionally, the Firebase modular web API is far too complicated for this little app in my opinion. All I need is a simple ORM to save and read data from a single table and Firebase was requiring me to import up to 5 different classes all to read and write simple data to a collection.

Supabase is far simpler and gave me error information which helped me debug my issues and thererfore I'm switching over to it.
