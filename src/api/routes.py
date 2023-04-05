"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Comment, Owner, Dogs, Breeds, Playdates, Message
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import os


api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    data = request.json
    #return jsonify(list(data.keys()))
    user = Owner.query.filter_by(username=data.get("username", None)).first()
    email = Owner.query.filter_by(email=data.get("email", None)).first()
    if user: 
        if user.password == data.get("password",None):
            return jsonify(token=create_access_token(data.get("username", None)))
    if email: 
        if email.password == data.get("password",None):
            return jsonify(token=create_access_token(data.get("email", None)))
    return jsonify(message="invalid login"), 401

@api.route('/secure', methods=['GET'])
@jwt_required()
def test():
    return jsonify(message="Success!!",username=get_jwt_identity())

@api.route('/signup', methods=['POST'])
def handel_signup():
    response_body = request.get_json()
    user_name = Owner.query.filter_by(username=response_body.get("username", None)).first()
    user_email = Owner.query.filter_by(email=response_body.get("email", None)).first()
    if  not user_name and not user_email:
        user = Owner(
            email=response_body["email"],
            username=response_body["username"],
            password=response_body["password"],
            is_active=True
        )
        db.session.add(user) 
        db.session.commit()
        return jsonify(message="Signed up"), 200
    
    return jsonify(message="User Already Exist"), 400


@api.route('/comment', methods=['POST'])
@jwt_required()
def create_comment():
    response_body = request.get_json()
    comment = Comment(
        text= response_body["text"],
        date_created=response_body["date_created"]
    )
    db.session.add(comment)
    db.session.commit()

    payload = {
        'msg': 'Comment Made!'
    }

    return jsonify(payload), 200

    
@api.route('/review', methods=['POST'])
def review():
    response_body = request.get_json()
    profile = Review(
    first_name=response_body["first_name"],
    last_name=response_body["last_name"]
    )
    db.session.add(review)
    db.session.commit()

    payload = {
        'msg': 'Review Made!'
    }
    return jsonify(payload), 200 

@api.route('/owner', methods=['POST'])
def handle_owner():
    request_body = request.get_json()
    # owner=Owner.query.get(request_body['name'])
    new_owner=Owner(
        name=request_body['name'],
        img_url = request_body['img_url'],
        zipcode = request_body['zipcode'],
        email = request_body['email'],
        password = request_body['password'],)
    db.session.add(new_owner)
    db.session.commit()
    return jsonify(new_owner.serialize()), 200
@api.route('/owner/<int:owner_id>', methods=['GET'])
def get_owner(owner_id):
    owner = Owner.query.get(owner_id)
    if owner is None:
        return jsonify({'message': 'Owner not found'}), 404
    return jsonify(owner.serialize()), 200

@api.route('/owners', methods=['GET'])
def get_all_owner():
    owner_list = Owner.query.all()
    owner_serialized = [owner.serialize() for owner in owner_list]
    if owner_list is None:
        return jsonify({'message': 'Owner not found'}), 404
    return jsonify(owner_serialized), 200

@api.route('/owner/<int:owner_id>', methods=['PUT'])
def update_owner(owner_id):
    owner = Owner.query.get(owner_id)
    if owner is None:
        return jsonify({'message': 'Owner not found'}), 404
    request_body = request.get_json()
    owner.name = request_body.get('name', owner.name)
    owner.img_url = request_body.get('img_url', owner.img_url)
    owner.zipcode = request_body.get('zipcode', owner.zipcode)
    owner.email = request_body.get('email', owner.email)
    owner.password = request_body.get('password', owner.password)
    db.session.commit()
    return jsonify(owner.serialize()), 200
    
@api.route('/owner/<int:id>', methods=['DELETE'])
def delete_owner(id):
    owner = Owner.query.get(id)
    if owner is None:
        raise APIException("Owner not found", 404)
    db.session.delete(owner)
    db.session.commit()
    return jsonify({'message': f'Owner{owner.id} was deleted'}), 201
 

# DOGS LINE START HERE
@api.route('/dogs', methods=['POST'])
def handle_dogs():
    request_body = request.get_json()
    new_dog=Dog(
        name=request_body['name'],
        img_url=request_body['img_url'],
        breed=request_body['breed'],
        chip_number=request_body['chip_number'],
        weight=request_body['weight'],
        neutered_or_spayed=request_body['neutered_or_spayed'],
        dog_id=request_body['dog_id'],)
    db.session.add(new_dog)
    db.session.commit()
    return jsonify(new_dog.serialize()), 200

@api.route('/dogs', methods=['GET'])
def get_all_dogs():
    dogs_list = Dogs.query.all()
    dogs_serialized = [dogs.serialize() for dogs in dogs_list]
    if dogs_list is None:
        return jsonify({'message': 'Dogs not found'}), 404
    return jsonify(dogs_serialized), 200

@api.route('/dogs/<int:dog_id>', methods=['GET'])
def get_dog(dog_id):
    dog = Dog.query.get(dog_id)
    if dog is None:
        return jsonify({'message': 'Dog not found'}), 404
    return jsonify(dog.serialize()), 200

@api.route('/dogs/<int:dog_id>', methods=['PUT'])
def update_dog(dog_id):
    dog = Dogs.query.get(dog_id)
    if dog is None:
        return jsonify({'message': 'Dog not found'}), 404
    request_body = request.get_json()
    dog.name = request_body.get('name', dog.name)
    dog.img_url = request_body.get('img_url', dog.img_url)
    dog.zipcode = request_body.get('zipcode', dog.zipcode)
    dog.email = request_body.get('email', dog.email)
    dog.password = request_body.get('password', dog.password)
    db.session.commit()
    return jsonify(dog.serialize()), 200
    
@api.route('/dogs/<int:id>', methods=['DELETE'])
def delete_dog(id):
    dog = Dogs.query.get(id)
    if dog is None:
        raise APIException("Dog not found", 404)
    db.session.delete(dog)
    db.session.commit()
    return jsonify({'message': f'Dogs{dog.id} was deleted'}), 201

# BREEDS LINE START HERE
@api.route('/breeds', methods=['POST'])
def handle_breeds():
    request_body = request.get_json()
    # owner=Owner.query.get(request_body['name'])
    new_breeds=Breeds(
        name=request_body['name'],
        img_url = request_body['img_url'],
        zipcode = request_body['zipcode'],
        email = request_body['email'],
        password = request_body['password'],)
    db.session.add(new_breeds)
    db.session.commit()
    return jsonify(new_breeds.serialize()), 200

@api.route('/breeds/<int:breeds_id>', methods=['GET'])
def get_breeds(breeds_id):
    breeds = breeds.query.get(breeds_id)
    if breeds is None:
        return jsonify({'message': 'Breeds not found'}), 404
    return jsonify(breeds.serialize()), 200

@api.route('/breeds/<int:breeds_id>', methods=['PUT'])
def update_breeds(breeds_id):
    breeds = Breeds.query.get(breeds_id)
    if breeds is None:
        return jsonify({'message': 'Breeds not found'}), 404
    request_body = request.get_json()
    breeds.name = request_body.get('name', breeds.name)
    breeds.img_url = request_body.get('img_url', breeds.img_url)
    breeds.zipcode = request_body.get('zipcode', breeds.zipcode)
    breeds.email = request_body.get('email', breeds.email)
    db.session.commit()
    return jsonify(breeds.serialize()), 200
    
@api.route('/breeds/<int:breeds_id>', methods=['DELETE'])
def delete_breeds(id):
    breeds = Breeds.query.get(id)
    if breeds is None:
        raise APIException("Breeds not found", 404)
    db.session.delete(breeds)
    db.session.commit()
    return jsonify({'message': f'breeds{breeds.id} was deleted'}), 201

# PLAYDATES LINE START HERE
@api.route('/playdates' , methods=['POST'])
def Playdates():
    request_body = request.get_json()
    # owner=Owner.query.get(request_body['name'])
    new_playdate=Playdates(
        owner1_id=request_body['owner1_id'],
        owner2_id = request_body['owner2_id'],
        messages = request_body['messages'],)
    db.session.add(new_playdate)
    db.session.commit()
    return jsonify(new_playdate.serialize()), 200

@api.route('/playdates/<int:playdates_id>' , methods=['GET'])
def get_playdates(playdates_id):
    playdates = playdates.query.get(playdates_id)
    if playdates is None:
        return jsonify({'message': 'playdates not found'}), 404
    return jsonify(playdates.serialize()), 200


@api.route('/playdates/<int:playdates_id>', methods=['PUT'])
def update_playdates_id(playdates_id):
    playdates_id = playdates_id.query.get(playdates_id)
    if playdates_id is None:
        return jsonify({'message': 'playdates_id not found'}), 404
    request_body = request.get_json()
    new_playdate=Playdates(
        owner1_id=request_body['owner1_id'],
        owner2_id = request_body['owner2_id'],
        messages = request_body['messages'],)
    db.session.add(new_playdate)
    db.session.commit()
    return jsonify(playdates_id.serialize()), 200

@api.route('playdates/<int:playdates_id>', methods=['DELETE'])
def delete_playdates(id):
    playdates = playdates.query.get(id)
    if playdates is None:
        raise APIException("playdates not found", 404)
    db.session.delete(playdates)
    db.session.commit()
    return jsonify({'message': f'playdates{playdates.id} was deleted'}), 201