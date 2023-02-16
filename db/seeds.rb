# Clear existing data
ServiceRequest.destroy_all
ServiceProvider.destroy_all
Service.destroy_all

puts "Seeding new users as Citizens..."
city = City.find_or_create_by(name: 'Chicago', location: '41.8781,-87.6298')
user_1 = User.create!(email: "shraddharaom@gmail.com", username: "Shraddha", password: "12345678", city: city)

puts "Seeding cities.."
cities = [
  { name: 'New York City', location: '40.7128,-74.0060' },
  { name: 'Los Angeles', location: '34.0522,-118.2437' },
  { name: 'Chicago', location: '41.8781,-87.6298' },
  { name: 'Houston', location: '29.7604,-95.3698' },
  { name: 'Phoenix', location: '33.4484,-112.0740' }
]

cities.each do |city|
  City.create(city)
  # latitude, longitude = city[:location].split(",")
  # new_city = City.create!(
  #   name: city[:name],
  #   location: city[:location],
  #   latitude: latitude,
  #   longitude: longitude
  # )
  # puts "Created city: #{new_city.name}"
end

puts "Seeding services for a Chicago city"
Service.create!([
  {
    name: 'Plumbing',
    description: 'Fixing leaks, clogs and other plumbing issues',
    category: 'Home Services',
    city: city
  },
  {
    name: 'Electrician',
    description: 'Electrical repairs and installations',
    category: 'Home Services',
    city: city
  },
  {
    name: 'Appliance Repair',
    description: 'Repair and maintenance of household appliances',
    category: 'Home Services',
    city: city
  },
  {
    name: 'Landscaping',
    description: 'Lawn care, garden maintenance, and tree trimming',
    category: 'Home Services',
    city: city
  },
  {
    name: 'House Cleaning',
    description: 'Residential and commercial cleaning services',
    category: 'Home Services',
    city: city
  },
  # Add more services here
])

puts "Seeding service provider's details..."
ServiceProvider.create([
  { name: 'Acme Trash Collection',
  contact_info: '123-456-7890',
  services_offered: "Service A",
  city: city
  },
  { name: 'Pothole Repair Inc.',
  contact_info: '123-456-7890',
  services_offered: "Service B",
  city: city
  }])

puts "Seeding service requests..."
cities = City.all
services = Service.all
users = User.all

  10.times do
    ServiceRequest.create!(
      title: Faker::Lorem.sentence,
      description: Faker::Lorem.paragraph,
      city: cities.sample,
      service: services.sample,
      user: users.sample,
      status: Faker::Lorem.name
    )
  end
