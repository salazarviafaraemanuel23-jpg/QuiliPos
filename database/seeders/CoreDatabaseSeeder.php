<?php

namespace Database\Seeders;

use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class CoreDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        Store::firstOrCreate(
            ['name' => 'QuiliPos Demo'],
            [
                'address'             => '42 Galle Road, Colombo 03, Sri Lanka',
                'contact_number'      => '0112345678',
                'sale_prefix'         => 'IS',
                'current_sale_number' => 0,
            ]
        );

        $permissions = [
            'pos', 'products', 'inventory', 'sales', 'customers', 'vendors',
            'charges', 'collections', 'expenses', 'quotations', 'reloads',
            'cheques', 'sold-items', 'purchases', 'payments', 'stores',
            'employees', 'payroll', 'media', 'settings',
        ];

        foreach ($permissions as $perm) {
            Permission::firstOrCreate(['name' => $perm, 'guard_name' => 'web']);
        }

        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'web']);
        $adminRole      = Role::firstOrCreate(['name' => 'admin',       'guard_name' => 'web']);
        $userRole       = Role::firstOrCreate(['name' => 'user',        'guard_name' => 'web']);

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $superAdminRole->syncPermissions(Permission::all());
        $adminRole->syncPermissions($permissions);
        $userRole->syncPermissions(['products', 'pos']);

        $superAdmin = User::updateOrCreate(
            ['email' => 'superadmin@demo.com'],
            [
                'name'      => 'Super Admin',
                'user_name' => 'superadmin',
                'user_role' => 'super-admin',
                'store_id'  => 1,
                'password'  => Hash::make('superadmin'),
                'is_active' => true,
            ]
        );
        $superAdmin->assignRole($superAdminRole);

        $admin = User::updateOrCreate(
            ['email' => 'admin@demo.com'],
            [
                'name'      => 'Admin User',
                'user_name' => 'admin',
                'user_role' => 'admin',
                'store_id'  => 1,
                'password'  => Hash::make('admin123'),
                'is_active' => true,
            ]
        );
        $admin->assignRole($adminRole);

        $cashier = User::updateOrCreate(
            ['email' => 'cashier@demo.com'],
            [
                'name'      => 'Cashier',
                'user_name' => 'cashier',
                'user_role' => 'user',
                'store_id'  => 1,
                'password'  => Hash::make('cashier123'),
                'is_active' => true,
            ]
        );
        $cashier->assignRole($userRole);

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $this->call([
            ContactSeeder::class,
            SettingSeeder::class,
            CollectionSeeder::class,
            ChargeSeeder::class,
        ]);
    }
}
