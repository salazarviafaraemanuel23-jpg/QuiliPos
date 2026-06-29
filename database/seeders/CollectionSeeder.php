<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Collection;
use Illuminate\Support\Str;

class CollectionSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Electronics',  'description' => 'Electronic devices and accessories'],
            ['name' => 'Beverages',    'description' => 'Drinks and beverages'],
            ['name' => 'Groceries',    'description' => 'Everyday grocery items'],
            ['name' => 'Clothing',     'description' => 'Apparel and fashion'],
            ['name' => 'Dairy',        'description' => 'Milk, cheese, and dairy products'],
            ['name' => 'Stationery',   'description' => 'Office and school supplies'],
        ];

        foreach ($categories as $cat) {
            Collection::firstOrCreate(
                ['collection_type' => 'category', 'slug' => Str::slug($cat['name'])],
                [
                    'name'        => $cat['name'],
                    'description' => $cat['description'],
                ]
            );
        }

        $brands = [
            ['name' => 'Samsung',    'description' => 'Samsung Electronics'],
            ['name' => 'Apple',      'description' => 'Apple Inc.'],
            ['name' => 'Nestle',     'description' => 'Nestle products'],
            ['name' => 'Coca-Cola',  'description' => 'Coca-Cola beverages'],
            ['name' => 'Unilever',   'description' => 'Unilever consumer goods'],
            ['name' => 'Local Brand','description' => 'Locally produced goods'],
        ];

        foreach ($brands as $brand) {
            Collection::firstOrCreate(
                ['collection_type' => 'brand', 'slug' => Str::slug($brand['name'])],
                [
                    'name'        => $brand['name'],
                    'description' => $brand['description'],
                ]
            );
        }

        $tags = [
            ['name' => 'Featured',     'description' => 'Featured products'],
            ['name' => 'New Arrival',  'description' => 'Recently added products'],
            ['name' => 'Best Seller',  'description' => 'Top selling products'],
            ['name' => 'On Sale',      'description' => 'Discounted products'],
        ];

        foreach ($tags as $tag) {
            Collection::firstOrCreate(
                ['collection_type' => 'tag', 'slug' => Str::slug($tag['name'])],
                [
                    'name'        => $tag['name'],
                    'description' => $tag['description'],
                ]
            );
        }
    }
}
