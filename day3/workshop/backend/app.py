from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Replace with your own MongoDB connection string if necessary
client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]  # Database name
collection = db["posts"]   # Collection name


@app.route("/posts", methods=["GET"])
def get_posts():
    """
    Retrieve all posts from the database.
    """
    posts = []
    for doc in collection.find():
        doc["_id"] = str(doc["_id"])  # Convert ObjectId to string for JSON serialization
        posts.append(doc)
    return jsonify(posts), 200


@app.route("/posts", methods=["POST"])
def create_post():
    """
    Create a new post in the database.
    JSON body should include relevant fields, for example:
    {
        "title": "My First Post",
        "content": "Hello, World!"
    }
    """
    data = request.get_json()

    # Basic validation (optional)
    if not data or "title" not in data or "content" not in data:
        return jsonify({"error": "Missing title or content"}), 400

    # Insert the new document into MongoDB
    result = collection.insert_one(data)

    return jsonify({
        "message": "Post created successfully",
        "post_id": str(result.inserted_id)
    }), 201


@app.route("/posts/<post_id>", methods=["GET"])
def get_post_by_id(post_id):
    """
    Retrieve a single post by its MongoDB ObjectId.
    """
    try:
        # Convert the string post_id into an ObjectId
        obj_id = ObjectId(post_id)
    except:
        return jsonify({"error": "Invalid post_id"}), 400

    post = collection.find_one({"_id": obj_id})
    if post:
        post["_id"] = str(post["_id"])
        return jsonify(post), 200
    else:
        return jsonify({"error": "Post not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
