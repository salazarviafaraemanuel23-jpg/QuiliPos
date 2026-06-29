<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Inserting a walk-in customer record
        Contact::firstOrCreate(
            ['name' => 'Guest', 'type' => 'customer'],
            [
                'email' => null,
                'phone' => null,
                'address' => null,
                'balance' => 0.00,
                'loyalty_points' => null,
            ]
        );
    }
}
