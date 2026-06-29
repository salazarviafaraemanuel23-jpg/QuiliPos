<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DemoDataSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            DemoContactSeeder::class,
            DemoProductSeeder::class,
            DemoEmployeeSeeder::class,
            DemoPurchaseSeeder::class,
            DemoSaleSeeder::class,
            DemoExpenseSeeder::class,
            DemoChequeSeeder::class,
        ]);
    }
}
