<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            CoreDatabaseSeeder::class,
            DemoDataSeeder::class,
        ]);

        $this->command?->info('');
        $this->command?->info('Demo seeding complete!');
        $this->command?->info('');
        $this->command?->table(
            ['Role', 'Email', 'Password'],
            [
                ['Super Admin', 'superadmin@demo.com', 'superadmin'],
                ['Admin',       'admin@demo.com',       'admin123'],
                ['Cashier',     'cashier@demo.com',     'cashier123'],
            ]
        );
    }
}
